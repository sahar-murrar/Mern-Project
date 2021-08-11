import { Button } from '@material-ui/core';
import { navigate } from '@reach/router';
const EditButton= props => {
    const { productId, successCallback } = props;
    const updateForm = ()=>{
        navigate("/edit/"+productId);
       
    }
    return (
        <Button variant="contained" color="primary" disableElevation onClick={updateForm}>
            Edit
        </Button>
    )
}
export default EditButton;