import { Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { Fragment, useState } from 'react';
import { InputField } from '../../../InputField/InputField';
import schema from '../../../schema/schema';
import style from '../../../Global.css'
import EditableRow from '../../../EditableRow/EditableRow';


const getInitialValues = () => {
    return {
        id: 0,
        name: '',
        lastName: '',
        height: '',
        birthDate: '',
    }
}



const PagesFormList = () => {
    const [count, setCount] = useState(1);
    const [valeuId, setValueId] = useState(null);
    const [form, setForm] = useState({ ...getInitialValues() })
    const [editFormData, setEditFormData] = useState([{
        id: 0,
        name: '',
        lastName: '',
        height: 0,
        birthDate: '',
    }]);
    const [data, setData] = useState([
        {
            id: 1,
            name: 'Gustavo',
            lastName: 'Suzuki',
            height: 1.74,
            birthDate: '2001-09-18',
        },
        {
            id: 2,
            name: 'Gustavo',
            lastName: 'Suzuki',
            height: 1.74,
            birthDate: '2001-09-18',
        }
    ]);

    function onSubmit(values, { resetForm }) {
        setData([...data, { ...values, id: count }]);
        console.log('SUBMIT', values);
        implementCount();
        resetForm();
    }

    function clearTable() {
        if (window.confirm('Deseja deletar toda a lista?')) {
            setData([]);
        }
    }

    function jsonHtml() {
        var jsonArray = JSON.stringify(data, null, 2);
        var jsonPage = window.open();
        jsonPage.document.open();
        jsonPage.document.write('<html><body><pre>' + jsonArray + '</pre></body></html>')
        jsonPage.document.close();
    }

    function dateFormat(date) {
        var arrayDateHour = date.split(" ");
        var arrayDate = arrayDateHour[0].split("-");
        var dateFomrated = `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`
        return (dateFomrated)
    }

    function age(date) {
        var arrayDateHour = date.split(" ");
        var arrayDate = arrayDateHour[0].split("-");
        var thisYear = new Date().getFullYear();
        var years = `${thisYear - arrayDate[0]} anos`
        return (years)
    }

    const handleEditFormSubmit = (ev) => {
        ev.preventDefault();
    
        const editData = {
          id: valeuId,
          name: editFormData.name,
          lastName: editFormData.lastName,
          height: editFormData.height,
          birthDate: editFormData.birthDate,
        };
    
        const newData = [...data];
    
        const index = data.findIndex((value) => value.id === valeuId)
    
        newData[index] = editData;
    
        setData(newData);
        setValueId(null);
      };

    const handleEditFormChange = (ev) => {
        ev.preventDefault();

        const fieldName = ev.target.getAttribute('name');
        const fieldValue = ev.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleEditClick = (ev, value) => {
        ev.preventDefault();
        setValueId(value.id);

        const formValues = {
            name: value.name,
            lastName: value.lastName,
            height: value.height,
            birthDate: value.birthDate,
        };

        setEditFormData(formValues)
    };

    const handleCancelClick = () => {
        setValueId(null);
    };

    const inList = (data.length > 0)

    const implementCount = () => {
        setCount(count + 1)
    }

    const deleteDataItem = (idItem, nameItem) => {
        if (window.confirm(`Deseja deletar o(a) usu??rio(a) ${nameItem} ?`)) {
            const filteredItens = data.filter(d => d.id !== idItem);
            setData(filteredItens);
        }
    }

    return (
        <>
            <div className='FormList'>
                <header class='rgbHeader'>
                    SUZUKI'S FORM
                </header>
                <Formik
                    onSubmit={onSubmit}
                    validationSchema={schema}
                    validateOnMount
                    initialValues={form}
                    render={({ isValid, resetForm }) => (
                        <Stack spacing={15} direction='column'>
                            <Form id='form'>
                                <label>Nome: *</label>
                                <InputField id='name' variant='filled' name='name' type='text' placeholder='Insira aqui seu nome' />
                                <label>Sobrenome: *</label>
                                <InputField id='lastName' name='lastName' type='text' placeholder='Insira aqui seu sobrenome' />
                                <label>Altura: *</label>
                                <InputField id='height' name='height' type='number' step={0.10} placeholder='Insira aqui sua altura' />
                                <label>Data de nascimento: *</label>
                                <InputField id='birthDate' name='birthDate' type='date' />
                                <Stack direction='column' spacing={0.5}>
                                    <Button color='success' variant='contained' type='submit' id='btn' disabled={!isValid}>SALVAR</Button>
                                    <Button color='warning' variant='contained' onClick={resetForm} disabled={!isValid}>LIMPAR</Button>
                                </Stack>
                            </Form>
                        </Stack>
                    )}
                />
            </div>
            <form
          onSubmit={handleEditFormSubmit}
          className='FormListTable'
        >
                <TableContainer style={{
                    color: 'white',
                    backgroundColor: 'rgb(45, 43, 49)',
                }} component={Paper}>
                    <Table
                        sx={{ minWidth: 500 }}
                        size='small'
                        aria-label='a dense table'
                    >
                        <TableHead >
                            <TableRow >
                                <TableCell style={{ color: '#99989B', fontFamily: 'Homenaje, sans-serif', }}>Nome</TableCell>
                                <TableCell style={{ color: '#99989B', fontFamily: 'Homenaje, sans-serif', }} align='center'>Sobrenome</TableCell>
                                <TableCell style={{ color: '#99989B', fontFamily: 'Homenaje, sans-serif', }} align='center'>Altura</TableCell>
                                <TableCell style={{ color: '#99989B', fontFamily: 'Homenaje, sans-serif', }} align='center'>Data De Nascimento</TableCell>
                                <TableCell style={{ color: '#99989B', fontFamily: 'Homenaje, sans-serif', }} align='center'>Idade</TableCell>
                                <TableCell style={{ color: '#99989B', fontFamily: 'Homenaje, sans-serif', }} align='left'>Op????es</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <Fragment>
                                    {valeuId === row.id ? (
                                        <EditableRow
                                            editFormData={editFormData}
                                            handleEditFormChange={handleEditFormChange}
                                            handleCancelClick={handleCancelClick} />
                                    ) : (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell style={{ color: '#99989B', fontFamily: 'Homenaje, sans-serif', }} component='th' scope='row'>
                                                {row.name}
                                            </TableCell>
                                            <TableCell style={{ color: '#99989B', fontFamily: 'Homenaje, sans-serif', }} align='center'>{row.lastName}</TableCell>
                                            <TableCell style={{ color: '#99989B', fontFamily: 'Homenaje, sans-serif', }} align='center'>{row.height}</TableCell>
                                            <TableCell style={{ color: '#99989B', fontFamily: 'Homenaje, sans-serif', }} align='center'>{dateFormat(row.birthDate)}</TableCell>
                                            <TableCell style={{ color: '#99989B', fontFamily: 'Homenaje, sans-serif', }} align='center'>{age(row.birthDate)}</TableCell>
                                            <TableCell style={{ color: '#99989B', fontFamily: 'Homenaje, sans-serif', }} align='center'>{
                                                <div className='ActionsButton'>
                                                    <Stack style={{ fontFamily: 'Homenaje, sans-serif', }} direction='row' spacing={0.5}>
                                                        <Button style={{ fontFamily: 'Homenaje, sans-serif' }} color='primary' variant='contained' onClick={(ev) => handleEditClick(ev, row)} >Editar</Button>
                                                        <Button style={{ fontFamily: 'Homenaje, sans-serif' }} color='error' variant='contained' onClick={() => deleteDataItem(row.id, row.name)}>Excluir</Button>
                                                    </Stack>
                                                </div>
                                            }</TableCell>
                                        </TableRow>
                                    )}
                                </Fragment>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className='Actions'>
                    <Stack style={{
                        marginTop: '4px',
                        width: '100%',
                        justifyContent: 'space-between',
                        display: 'flex'
                    }}
                        direction='row'
                        spacing={0.5}
                    >
                        <Button style={{ fontFamily: 'Homenaje, sans-serif' }} color='primary' variant='contained' onClick={jsonHtml} disabled={!inList}>EXPORTAR JSON</Button>
                        <Button style={{ fontFamily: 'Homenaje, sans-serif' }} color='error' variant='contained' onClick={clearTable} disabled={!inList}>EXCLUIR TABELA</Button>
                    </Stack>
                </div>
            </form>
        </>
    );
}

export default PagesFormList;
