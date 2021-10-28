import { Stack } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import style from './App.css';
import schema from './page/form/schema';

function App() {

  function onSubmit(values) {
    console.log(values)
    setData([...data, values])
  }

  const [data, setData] = useState([{
    name: 'Gustavo',
    lastName: 'Suzuki',
    height: 1.74,
    birthDate: '2001-18-01',
  },
  {
    name: 'Diadema',
    lastName: 'Suzuki',
    height: 1.74,
    birthDate: '2001-18-01',
  }]);

  return (
    <div className='App'>
      <Formik
        onSubmit={onSubmit}
        validationSchema={schema}
        validateOnMount
        initialValues={{
          name: '',
          lastName: '',
          height: 0,
          birthDate: '',
        }}
        render={({ isValid }) => (
          <Stack spacing={10} direction='column'>
            <Form>
              <div className={style.formList}>
                <label>Nome: *</label>
                <Field name='name' type='text' placeholder='Nome*' />
                <ErrorMessage name='name' />
              </div>
              <div className={style.formList}>
                <label>Sobrenome: *</label>
                <Field name='lastName' type='text' placeholder='Sobrenome*' />
                <ErrorMessage name='lastName' />
              </div>
              <div className={style.formList}>
                <label>Altura: *</label>
                <Field name='height' type='number' step={0.01} />
                <ErrorMessage name='height' />
              </div>
              <div className={style.formListDate}>
                <label>Data de nascimento: *</label>
                <Field name='birthDate' type='date' />
                <ErrorMessage name='birthDate' />
              </div>
              <button type='submit' disabled={!isValid}>ENVIAR</button>
            </Form>
          </Stack>
        )}
      />
    </div>
  );
}

export default App;
