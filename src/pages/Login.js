import React, { useContext, useRef, useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { Box, Button, TextField } from '@mui/material';
import FormItemExtension from '../components/FormItemExtension';
import { useImmer } from 'use-immer';
import { FORM_ITEM_WIDTH_400, useLoginRegisterStyles } from '../utils/utils';
import { AuthContext } from './AuthContextProvider';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const loginRegisterClasses = useLoginRegisterStyles();

  const [form, setForm] = useImmer({
    name: '',
    password: '',
  });

  const validator = useRef(
    new SimpleReactValidator({
      validators: {},
    }),
  );
  const [, forceUpdate] = useState();

  const { activeUser, setActiveUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Box className={loginRegisterClasses.root}>
      <Box className={loginRegisterClasses.wrapper}>
        <FormItemExtension label={'Name'} labelPosition="left" required>
          <TextField
            id="name"
            variant="outlined"
            value={form.name}
            onChange={(event) => {
              setForm((prev) => {
                prev.name = event.target.value;
              });
            }}
            size="small"
            onBlur={() => validator.current.showMessageFor('name')}
            error={validator.current.message('name', form?.name, 'required')}
            helperText={validator.current.message(
              'name',
              form?.name,
              'required',
            )}
            style={{ width: FORM_ITEM_WIDTH_400 }}
          />
        </FormItemExtension>

        <FormItemExtension label={'Password'} labelPosition="left" required>
          <TextField
            type="password"
            id="password"
            variant="outlined"
            value={form.password}
            onChange={(event) => {
              setForm((prev) => {
                prev.password = event.target.value;
              });
            }}
            size="small"
            onBlur={() => validator.current.showMessageFor('password')}
            error={validator.current.message(
              'password',
              form?.password,
              'required',
            )}
            helperText={validator.current.message(
              'password',
              form?.password,
              'required',
            )}
            style={{ width: FORM_ITEM_WIDTH_400 }}
          />
        </FormItemExtension>

        <FormItemExtension labelPosition="left">
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={async (event) => {
              if (validator.current.allValid()) {
                validator.current.hideMessages();

                setActiveUser((prev) => {
                  prev.name = form.name;
                });
                navigate('/');
              } else {
                forceUpdate(1);
                validator.current.showMessages();
              }
            }}
          >
            Submit
          </Button>
        </FormItemExtension>
      </Box>
    </Box>
  );
}
