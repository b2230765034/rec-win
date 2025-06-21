#![no_std]

use soroban_sdk::{
    contract, contractimpl, symbol_short, vec, Address, Env, Symbol,  IntoVal,
};

#[contract]
pub struct RewardContract;

#[contractimpl]
impl RewardContract {
    pub fn mint_reward(env: Env, token: Address, to: Address, material: Symbol) {
        let valid_materials = vec![&env, symbol_short!("glass"), symbol_short!("carton"),symbol_short!("plastic"),symbol_short!("cam")];
        if !valid_materials.contains(&material) {
            panic!("Material not eligible");
        }

        env.invoke_contract::<()>(
            &token,
            &symbol_short!("mint"),
            (to, 10_i128).into_val(&env),
        );
    }
}
