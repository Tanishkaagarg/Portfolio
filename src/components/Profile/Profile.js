import { Typography } from '@material-ui/core'
import React from 'react'
import './Profile_css.css'
import Timeline from '../Timeline/Timeline';
import myImage from '../../assets/images/displaypicture.jpg'
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      padding: '10px 100px ',
      position: 'absolute',
      
    },
  }));
  

const Profile = () => {
    const classes = useStyles();
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name"> Tanishka Garg</Typography>
                <Typography className="title"> Software Engineer</Typography>
            </div>

            <figure className="profile_image">
                <img src={myImage} alt="" />
            </figure>

            <div className="porfile_information">
                <Timeline />
                
               
            </div>

            
        </div>
    )
}

export default Profile
