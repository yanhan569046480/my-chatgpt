import React, { useRef, useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { Box, Button, TextField } from '@mui/material';
import FormItemExtension from '../components/FormItemExtension';
import { useImmer } from 'use-immer';
import { FORM_ITEM_WIDTH_400, useLoginRegisterStyles } from '../utils/utils';

export default function Register() {
  const loginRegisterClasses = useLoginRegisterStyles();

  const [form, setForm] = useImmer({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validator = useRef(
    new SimpleReactValidator({
      validators: {},
    }),
  );
  const [, forceUpdate] = useState();

  return (
    <Box className={loginRegisterClasses.root}>
      <Box className={loginRegisterClasses.wrapper}>
        <FormItemExtension
          label={'Name'}
          labelPosition="left"
          labelWidth="200px"
          required
        >
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

        <FormItemExtension
          label={'Email'}
          labelPosition="left"
          labelWidth="200px"
          required
        >
          <TextField
            id="email"
            variant="outlined"
            value={form.email}
            onChange={(event) => {
              setForm((prev) => {
                prev.email = event.target.value;
              });
            }}
            size="small"
            onBlur={() => validator.current.showMessageFor('email')}
            error={validator.current.message('email', form?.email, 'required')}
            helperText={validator.current.message(
              'email',
              form?.email,
              'required',
            )}
            style={{ width: FORM_ITEM_WIDTH_400 }}
          />
        </FormItemExtension>

        <FormItemExtension
          label={'Password'}
          labelPosition="left"
          labelWidth="200px"
          required
        >
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

        <FormItemExtension
          label={'Confirm Password'}
          labelPosition="left"
          labelWidth="200px"
          required
        >
          <TextField
            type="password"
            id="confirmPassword"
            variant="outlined"
            value={form.confirmPassword}
            onChange={(event) => {
              setForm((prev) => {
                prev.confirmPassword = event.target.value;
              });
            }}
            size="small"
            onBlur={() => validator.current.showMessageFor('confirmPassword')}
            error={validator.current.message(
              'confirmPassword',
              form?.confirmPassword,
              'required',
            )}
            helperText={validator.current.message(
              'confirmPassword',
              form?.confirmPassword,
              'required',
            )}
            style={{ width: FORM_ITEM_WIDTH_400 }}
          />
        </FormItemExtension>

        <FormItemExtension labelPosition="left" labelWidth="200px">
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={async (event) => {
              if (validator.current.allValid()) {
                validator.current.hideMessages();
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
