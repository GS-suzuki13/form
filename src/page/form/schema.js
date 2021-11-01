import * as Yup from 'yup';

const max = (new Date().getFullYear())

export default Yup.object({
    name: Yup.string()
        .min(2, 'Muito Curto!')
        .max(50, 'Muito Longo!')
        .required('Insira seu Nome!'),

    lastName: Yup.string()
        .min(2, 'Muito Curto!')
        .max(50, 'Muito Longo!')
        .required('Insira seu sobrenome!'),

    height: Yup.number()
        .min(0.01, 'Insira uma altura válida')
        .test(
            'maxDigitsAfterDecimal',
            'o campo numérico deve ter 2 dígitos após o decimal ou menos',
            (number) => /^\d+(\.\d{1,2})?$/.test(number),
        ),

    birthDate: Yup.date()
        .default(new Date(max))
        .max(max, 'Insira uma data de nascimento válida!'),
});