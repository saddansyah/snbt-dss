import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Form from "../components/Form";

const Home = () => {
    const [isOPen, setisOpen] = useState(false);

    const handleOpen = () => {
        setisOpen(true);
    };

    const handleClose = () => {
        setisOpen(false);
    };

    return (<>
        <h1 className="text-black font-bold text-2xl text-center mb-5">Isi nilai SNBT kamu:</h1>
        <div className="md:flex md:justify-center">
            <Form />
        </div>
        <div className="text-center mt-24 font-semibold underline text-gray-400">
            <button className='underline' onClick={handleOpen}>Cara Penggunaan 🛈</button>
            <Dialog
                open={isOPen}
                onClose={handleClose}
            >
                <DialogTitle>
                    <p className="font-semibold">
                        Cara Penggunaan
                    </p>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Isi skor SNBT yang kalian dapat pada <span className='italic'>form</span> terkait. Setelah itu, klik tombol Submit untuk melihat hasil skor SNBT kalian dalam bentuk grafik dan rekomendasi program studi.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    </>);
}

export default Home;