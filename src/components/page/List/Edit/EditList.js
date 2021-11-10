import { Button, Stack } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { InputField } from '../../../InputField/InputField';
import schema from '../../../schema/schema';
import style from '../../../Global.css'


const PagesEditList = () => {
    return (
        <div className='FormList'>
            <header style={{ marginLeft: '25%'}} class='rgbHeader'>
                SUZUKI'S FORM EDIT
            </header>
            <Formik
                validationSchema={schema}
                validateOnMount
                render={({ isValid, setFieldValue, resetForm }) => (
                    <Stack spacing={15} direction='column'>
                        <Form id='form'>
                            <label>Nome: *</label>
                            <InputField id='name' variant='filled' name='name' type='text' placeholder='Insira aqui seu nome' />
                            <label>Sobrenome: *</label>
                            <InputField id='lastName' name='lastName' type='text' placeholder='Insira aqui seu sobrenome' />
                            <label>Altura: *</label>
                            <InputField id='height' name='height' type='number' step={0.01} />
                            <label>Data de nascimento: *</label>
                            <InputField id='birthDate' name='birthDate' type='date' />
                            <Stack direction='column' spacing={0.5}>
                                <Button color='success' variant='contained' type='submit' id='btn' disabled={!isValid}>SALVAR E VOLTAR</Button>
                                <Button color='warning' variant='contained' onClick={resetForm} disabled={!isValid}>LIMPAR</Button>
                                <Button color='primary' variant='contained' onClick={resetForm} href='/' >VOLTAR</Button>
                            </Stack>
                        </Form>
                    </Stack>
                )}
            />
        </div>
    );
};

export default PagesEditList;
