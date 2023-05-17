import { Box, Button, Card, Modal, TextField } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import { useKeyDown } from '../../../hooks/useKeyDown';
import CommentCard from './components/CommentCard';
import Axios from '../../AxiosInstance';
import GlobalContext  from '../../context/GlobalContext';
import Cookies from 'js-cookie';
import { AxiosError } from 'axios';
import CommentContext  from '../../context/CommentContext';

const CommentModal = ({ open = false, handleClose = () => {} }) => {
  const { user, setStatus } = useContext(GlobalContext);
  const [textField, setTextField] = useState('');
  const [textFieldError, setTextFieldError] = useState('');
  const { comments, setComments } = useContext(CommentContext);

  useKeyDown(() => {
    handleAddComment();
  }, ['Enter']);

  useEffect(() => {
    const userToken = Cookies.get('UserToken');
    if (userToken !== undefined && userToken !== 'undefined') {
      Axios.get('/comment', {
        headers: { Authorization: `Bearer ${userToken}` },
      })
        .then((response) => {
          const commentsData = response.data.data.map((el) => ({
            id: el.id,
            msg: el.text,
          }));
          setComments(commentsData);
        })
        .catch((error) => {
          console.error('Error fetching comments:', error);
        });
    }
  }, [user, setComments]);

  const handleAddComment = async () => {
    if (!validateForm()) return;

    try {
      const userToken = Cookies.get('UserToken');
      const response = await Axios.post(
        '/comment',
        { text: textField },
        { headers: { Authorization: `Bearer ${userToken}` } }
      );

      if (response.data.success) {
        setStatus({
          severity: 'success',
          msg: 'Create comment successfully',
        });

        const newComment = {
          id: response.data.data.id,
          msg: textField,
        };

        setComments((prevComments) => [...prevComments, newComment]);
        setTextField('');
      }
    } catch (error) {
      setTextField('');

      if (error instanceof AxiosError) {
        if (error.response) {
          setStatus({
            msg: error.response.data.error,
            severity: 'error',
          });
        }
      } else {
        setStatus({
          msg: error.message,
          severity: 'error',
        });
      }
    }
  };

  const validateForm = () => {
    if (!textField) {
      setTextFieldError('Comment is required');
      return false;
    }

    setTextFieldError('');
    return true;
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Card
        sx={{
          width: { xs: '60vw', lg: '40vw' },
          maxWidth: '600px',
          maxHeight: '400px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '16px',
          backgroundColor: '#ffffffCC',
          p: '2rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <TextField
            value={textField}
            onChange={(e) => setTextField(e.target.value)}
            fullWidth
            error={!!textFieldError}
            helperText={textFieldError}
            placeholder="Type your comment"
            variant="standard"
         

          />
          <Button onClick={handleAddComment}>Submit</Button>
        </Box>
        <Box
          sx={{
            overflowY: 'scroll',
            maxHeight: 'calc(400px - 2rem)',
            '&::-webkit-scrollbar': {
              width: '.5rem', // chromium and safari
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#999999',
              borderRadius: '10px',
            },
          }}
        >
          {comments.map((comment) => (
            <CommentCard comment={comment} key={comment.id} setComments={setComments}/>
          ))}
        </Box>
      </Card>
    </Modal>
  );
};

export default CommentModal;