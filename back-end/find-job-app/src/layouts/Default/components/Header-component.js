import {
    AppBar,
    Avatar,
    Icon,
    IconButton,
    Toolbar,
    Typography,
    Slide,
    useScrollTrigger,
    Button
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import { useDispatch } from "react-redux";
import { ProfileMenu } from "./Others-component";
import EmailIcon from '@material-ui/icons/Email';
import SearchIcon from '@material-ui/icons/Search';
// import { useTranslation } from 'react-i18next';

export default function ({ classes, open, setOpen, mainRef }) {
    const trigger = useScrollTrigger({ target: mainRef });
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();
    const dispath = useDispatch();
    // const { t } = useTranslation('Profile_Dialog');

    const handleProfile_click = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleLogout_click = () => {
        setAnchorEl(null);
        // dispath(userActions.signOut())
    };
    const handleMenu_close = (route) => {
        if (route) {
            history.replace(route.path);
        }

        setAnchorEl(null);
    };
    // const handleChangeLanguage_callback = (lang) => {
    //   i18n.changeLanguage(lang.value);
    // };

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <div className="block-left">
                        <IconButton
                            size="small"
                            className="menu-icon"
                            onClick={() => setOpen((pre) => !pre)}
                        >
                            {open ? <ArrowBackIosIcon /> : <MenuIcon />}
                        </IconButton>
                        <Typography variant="h5" noWrap className="logo-text">
                            Something
                        </Typography>
                    </div>


                    <div className="block-right " >
                        {/* <MenuLanguage classes={classes} t={t} onChangeLanguage={handleChangeLanguage_callback} /> */}
                        {/* <IconButton className="profile" size="small" onClick={handleProfile_click}>
                            <Avatar></Avatar>
                        </IconButton> */}

                        
                        <IconButton  > <SearchIcon /> </IconButton>
                        <IconButton > <EmailIcon /></IconButton>
                        <Button > <Typography variant="subtitle1" style={{ textTransform: 'none' }}>Login</Typography> </Button>
                        

                    </div>
                </Toolbar>

                <ProfileMenu
                    classes={classes}
                    t={null}
                    anchorEl={anchorEl}
                    onClose={handleMenu_close}
                    logout={handleLogout_click}
                />
            </AppBar>
        </Slide>
    );
}