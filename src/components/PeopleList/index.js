import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { IoPencil } from "react-icons/io5";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function PeopleList({id,name,description, loading}) {
    const {first_name,last_name} = name;
	const [descriptionPeople, setDescritionPeople] = useState([]);
	const [disabledButtom, setDisabledButtom] = useState(false);
	const [editElement, setEditElement] = useState(false);
	const auth = localStorage.getItem('token');

	
	useEffect(() => {
		setDescritionPeople(description)
	},[])

    function handleChange(pro) {
		setDescritionPeople(pro.listName)
	}

    const saveHandler = (e) => {
        e.preventDefault();
	}
	
	const editverific = (id) => {
		if (disabledButtom && id === editElement) return false
		else return true
	}
    return (
        <>
		<form id={id} onSubmit={saveHandler}>
		{loading ? 'loading' : 
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
				<ListItem
					alignItems="flex-start"
					key={id}
					secondaryAction={
						<Button disabled={auth ? false : true} onClick={(e) => {
							if (!disabledButtom) setDisabledButtom(true)
							else setDisabledButtom(false)
							setEditElement(id)
					}}>
						{disabledButtom ? 'Guardar' : <IoPencil />}    
					</Button>         
				}
				>
			<ListItemAvatar>
			<Avatar alt={`${first_name} ${last_name}`}  />
			</ListItemAvatar>
			<ListItemText
			primary={`${first_name} ${last_name}`}
			secondary={
				<>
					<TextField id={id} name={id} disabled={editverific(id)} value={descriptionPeople} onChange={(e) => handleChange({listName: e.target.value})} variant="standard" />
				</>
			}
			/>
		</ListItem>
			</List>
                }
		</form>
	</>
  );
}
