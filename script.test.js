/** @jest-environment jsdom */

const { validarCPF } = require("./script")
 
 test ('CPF válido', ()=>{
    var cpf = validarCPF ("17972128006");

    expect(cpf).toBe(true);
 })

 test ('CPF Inválido', ()=>{
    var cpf = validarCPF ("11122233355");

    expect(cpf).toBe(false);
 })