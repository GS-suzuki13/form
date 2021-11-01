import { Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import style from './App.css';
import { InputField } from './page/form/InputField';
import schema from './page/form/schema';

function App() {

  function onSubmit(values) {
    setData([...data, { ...values, id: count }])
    console.log(values)
    implementCount()
  }

  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const implementCount = () => {
    setCount(count + 1)
  }

  const deleteDataItem = (idItem) => {
    const filteredItens = data.filter(d => d.id !== idItem);
      setData(filteredItens);
  }

  function changeData(id, newName, newLastName, newHeight, newBirthDate) {
    const dataCopy = [...data];
    for (let data in dataCopy) {
      if (data.id === id) {
        data.name = newName;
      }
    }
    setData(dataCopy);
    console.log(dataCopy);
  }

  return (
    <>
      <div className='App'>
        <Formik
          onSubmit={onSubmit}
          validationSchema={schema}
          validateOnMount
          initialValues={{
            id: 0,
            name: '',
            lastName: '',
            height: 0,
            birthDate: '',
          }}
          render={({ isValid }) => (
            <Stack spacing={15} direction='column'>
              <Form>
                <label>Nome: *</label>
                <InputField variant='filled' name='name' type='text' placeholder='Insira aqui seu nome' />
                <label>Sobrenome: *</label>
                <InputField name='lastName' type='text' placeholder='Insira aqui seu sobrenome' />
                <label>Altura: *</label>
                <InputField name='height' type='number' step={0.01} />
                <label>Data de nascimento: *</label>
                <InputField name='birthDate' type='date' />
                <Button className={style.buttonSend} color='success' variant='contained' type='submit' disabled={!isValid}>ENVIAR</Button>
              </Form>
            </Stack>
          )}
        />
      </div>
      <div className='Table'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} size='small' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align='center'>Sobrenome</TableCell>
                <TableCell align='center'>Altura</TableCell>
                <TableCell align='center'>Data De Nascimento</TableCell>
                <TableCell align='left'>Opções</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='center'>{row.lastName}</TableCell>
                  <TableCell align='center'>{row.height}</TableCell>
                  <TableCell align='center'>{row.birthDate}</TableCell>
                  <TableCell align='center'>{
                    <Stack direction='row' spacing={0.5}>
                      <Button color='primary' variant='contained' onClick={() => changeData(row.id, 'Kal-el')}>Editar</Button>
                      <Button color='error' variant='contained' onClick={() => deleteDataItem(row.id, row.name)}>Excluir</Button>
                    </Stack>
                  }</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default App;
