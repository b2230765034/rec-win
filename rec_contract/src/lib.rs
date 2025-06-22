#![no_std]

use soroban_sdk::{
    contract, contractimpl, Address, Env, Int, String, Vec, symbol_short,
};

#[contract]
pub struct RecyclingRewardContract;

#[contractimpl]
impl RecyclingRewardContract {
    // Reward 10 tokens to caller if category matches allowed ones
    pub fn reward(
        env: Env,
        caller: Address,
        category: String,
        token_contract_id: Address,
    ) -> bool {
        // Caller must authorize this transaction
        caller.require_auth();

        // Allowed categories
        let allowed = vec![
            String::from_str(&env, "glass"),
            String::from_str(&env, "plastic"),
            String::from_str(&env, "carton"),
        ];

        // Convert input category to lowercase for safe comparison
        let cat_lower = category.to_lowercase(&env);

        // Check if category is allowed
        if !allowed.contains(&cat_lower) {
            return false; // category not valid => no reward
        }

        // Amount to mint
        let amount = Int::from(10);

        // Prepare arguments for mint call: (Address, Int)
        let args = Vec::from_array(
            &env,
            [
                caller.clone().into_val(&env),
                amount.into_val(&env),
            ],
        );

        // Call the token contract's "mint" function
        env.invoke_contract(&token_contract_id, &symbol_short!("mint"), args);

        true
    }
}
