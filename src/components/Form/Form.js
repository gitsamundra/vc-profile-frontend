import { Button, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Input from './Input';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { createList } from '../../actions/list';

const Form = () => {
    const [file, setFile] = useState(null);
    const [newData, setNewData] = useState({
        name: '', profile_img: '', dob: '', address: '', 
        unit: '', date: '', place: '', details: ''
    });

    const classes = useStyles();
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        if(file) {
            const data = new FormData();
            const fileName = new Date().toISOString().replace(/:/g, '-')+ '-' + file.name;
            data.append('file', file);
            data.append('name', fileName);
            newData.profile_img = fileName;
        };
        dispatch(createList(newData));
    };

    const handleChange = e => {
        const {name, value } = e.target;
        setNewData({
            ...newData,
            [name] : value
        });
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>VC Memories</Typography>
                <Input 
                    name='name'
                    variant='outlined'
                    label='Name'
                    value={newData.name}
                    onChange={handleChange}
                />
                <Input 
                    name='dob'
                    variant='outlined'
                    label='Dob'
                    value={newData.dob}
                    onChange={handleChange}
                />
                <Input 
                    name='address'
                    variant='outlined'
                    label='Address'
                    value={newData.address}
                    onChange={handleChange}
                />
                <Input 
                    name='unit'
                    variant='outlined'
                    label='Unit'
                    value={newData.unit}
                    onChange={handleChange}
                />
                <Input 
                    name='date'
                    variant='outlined'
                    label='Date'
                    value={newData.date}
                    onChange={handleChange}
                />
                <Input 
                    name='place'
                    variant='outlined'
                    label='Place'
                    value={newData.place}
                    onChange={handleChange}
                />
                <Input 
                    name='details'
                    variant='outlined'
                    label='Details'
                    value={newData.details}
                    onChange={handleChange}
                />
                <div className={classes.fileInput}>
                    <input 
                        type='file'
                        name="profile_img"
                        onChange={e => setFile(e.target.files[0])}
                    />
                </div>
                <Button type='submit' fullWidth className={classes.buttonSubmit} variant='contained' color='primary' size='large'>Submit</Button>
            </form>
        </Paper>
    )
}

export default Form;
