import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate('/');
    }
  };
  return (
    // <InputGroup onSubmit={submitHandler}>
    //   <Form.Control
    //     type='text'
    //     name='q'
    //     onChange={(e) => setKeyword(e.target.value)}
    //     placeholder='Search Products...'
    //     className='mr-sm-2 ml-sm-5'
    //   ></Form.Control>
    //   <Button type='submit' variant='outline-success' className='p-2'>
    //     Search
    //   </Button>
    // </InputGroup>

    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button>
    </Form>

    // <InputGroup>
    //   <Form.Control
    //     placeholder="Recipient's username"
    //     aria-label="Recipient's username with two button addons"
    //   />
    //   <Button variant='outline-secondary'>Button</Button>
    //   <Button variant='outline-secondary'>Button</Button>
    // </InputGroup>
  );
};

export default SearchBox;
