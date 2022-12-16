/* eslint-disable no-unused-expressions */
import Select from '../../components/form/select'
import Input from '../../components/form/input'
import SubmitButton from '../../components/form/submitButton'
import React, { useState } from 'react';

export const Menu = () => {
    const [products, setProducts] = useState('');
    const [type, setType] = useState('');
    const [active, setActive] = useState('');
    const [quantify, setQuantify] = useState(1);
    const [client, setClient] = useState('');
    const [table, setTable] = useState('');
    const [error, setError] = useState('');
}