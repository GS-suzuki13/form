import * as Yup from 'yup';

const max = (new Date().getFullYear())

export default Yup.object({
    name: Yup.string()
        .min(2, 'Muito Curto!')
        .max(50, 'Muito Longo!')
        .required('Insira seu nome!'),

    lastName: Yup.string()
        .min(2, 'Muito Curto!')
        .max(50, 'Muito Longo!')
        .required('Insira seu sobrenome!'),

    height: Yup.number()
        .min(0.01, 'Insira uma altura válida!')
        .test(
            'maxDigitsAfterDecimal',
            'O campo numérico deve ter 2 dígitos após o decimal ou menos',
            (number) => /^\d+(\.\d{1,2})?$/.test(number),
        )
        .required('Insira sua altura!'),

    birthDate: Yup.date()
        .min('0001-01-01', 'Insira uma data acima de 01/01/0001')
        .max(max, 'Insira uma data de nascimento válida!')
        .required('Insira sua data de nascimento!'),
});