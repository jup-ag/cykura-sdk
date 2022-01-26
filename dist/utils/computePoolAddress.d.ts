import { Token } from '@uniswap/sdk-core';
import { FeeAmount } from '../constants';
export declare function u16ToSeed(num: number): Uint8Array;
export declare function i16ToSeed(num: number): Uint8Array;
export declare function u32ToSeed(num: number): Uint8Array;
export declare function i32ToSeed(num: number): Uint8Array;
export declare const LOCAL_PROGRAM_ID = "9qe9svzmigVAvWh2qX9AJq3p4N9QbTyx2yRCfN1aAZam";
/**
 * Computes a pool address
 * @param factoryAddress The Uniswap V3 factory address
 * @param tokenA The first token of the pair, irrespective of sort order
 * @param tokenB The second token of the pair, irrespective of sort order
 * @param fee The fee tier of the pool
 * @param initCodeHashManualOverride Override the init code hash used to compute the pool address if necessary
 * @returns The pool address
 */
export declare function computePoolAddress({ factoryAddress, tokenA, tokenB, fee, initCodeHashManualOverride }: {
    factoryAddress: string;
    tokenA: Token;
    tokenB: Token;
    fee: FeeAmount;
    initCodeHashManualOverride?: string;
}): Promise<string>;
