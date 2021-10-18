import React from 'react'
import Moment from 'react-moment'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Badge from 'react-bootstrap/Badge'
import Switch from 'react-bootstrap/esm/Switch'

const LogItem = ({
  deleteItem,
  updateItem,
  log: { _id, priority, user, text, created, status },
}) => {
  const setVariant = () => {
    if (priority === 'high') {
      return 'danger'
    } else if (priority === 'moderate') {
      return 'warning'
    } else if(priority === 'low'){
      return 'success'
    }
    //  else if(status === 'pass') {
    //   return 'primary'
    // } else if (status === 'wip') {
    //   return 'warning'
    // } else (status === 'done') {
    //   return 'info'
    // }
  }
  const statusVariant = () => {
    if (status === 'pass') {
      return 'info'
    } else {
      return 'success'
    }
  }

  return (
    <tr>
      <td>
        <Badge variant={setVariant()} className='p-2'>
          {priority.charAt(0).toUpperCase() + priority.slice(1)}
        </Badge>
      </td>
     
      <td>{text}</td>
      <td>{user}</td>
      <td>
        <Moment format='MMMM Do YYYY, h:mm:ss a'>{new Date(created)}</Moment>
      </td>
      <td>
        <Badge variant={statusVariant()} className='p-2'>
          {/* {status} */}
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </td>
      {/* ////////////////////////////WORKING COMPLETED  BUTTON/////////// */}
      <td>
        <Button variant="outline-light" size='sm' onClick={() => updateItem(_id,status)}>
        👍
        </Button>
      </td>
      {/* ////////////////////////////WORKING COMPLETED  BUTTON/////////// */}
      {/* ////////////////////////////radio  BUTTON/////////// */}

      {/* <td>
        <ButtonGroup className="mb-2">
          <ToggleButton
          className="mb-2"
          id="toggle-check"
          type="checkbox"
          variant="outline-primary"
          // checked={checked}
          onChange={() => updateItem(_id,status)}
        >
          ✔️ 
          </ToggleButton>
         </ButtonGroup>
      </td> */}







      <td>
        <Button variant='danger' size='sm' onClick={() => deleteItem(_id)}>
          x
        </Button>
      </td>
    </tr>
  )
}

export default LogItem
