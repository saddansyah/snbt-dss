import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import SendIcon from '@mui/icons-material/Send';

const Form = () => {
    const navigate = useNavigate();
    const baseUrl = 'http://127.0.0.1:7000';

    const [body, setBody] = useState(
        {
            scores: {
                P1: 0,
                P2: 0,
                P3: 0,
                P4: 0,
                P5: 0,
                P6: 0,
                P7: 0
            }
        }
    )

    const getData = async (baseUrl, body) => {
        try {
            const { data } = await axios.post(`${baseUrl}/evaluate`, body, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            sessionStorage.setItem("data", JSON.stringify(data))
            navigate('/result')
        }
        catch (e) {
            console.error(e);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();


        if (!!body) {
            if (!!Object.values(body.scores).filter(item => item > 1000).length) {
                alert('Nilai tidak boleh lebih dari 1000');
            }
            else {
                getData(baseUrl, body);
            }
        }


    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setBody((item) => { return { scores: { ...item.scores, [id]: parseFloat(value) || 0 } } })
    }

    return (<>
        <div className="wrapper md:w-2/3">
            <form className="flex flex-col gap-3 w-full">
                <TextField
                    id="P1"
                    onChange={handleChange}
                    label="Penalaran Umum (P1)"
                    placeholder="Contoh: 527"
                    size="small"
                    required
                />
                <TextField
                    id="P2"
                    onChange={handleChange}
                    label="Kuantitatif (P2)"
                    placeholder="Contoh: 527"
                    size="small"
                    required
                />
                <TextField
                    id="P3"
                    onChange={handleChange}
                    label="Pengetahuan dan Pemahaman Umum (P3)"
                    placeholder="Contoh: 527"
                    size="small"
                    required
                />
                <TextField
                    id="P4"
                    onChange={handleChange}
                    label="Memahami Bacaan dan Menulis (P4)"
                    placeholder="Contoh: 527"
                    size="small"
                    required
                />
                <TextField
                    id="P5"
                    onChange={handleChange}
                    label="Penalaran Matematika (P5)"
                    placeholder="Contoh: 527"
                    size="small"
                    required
                />
                <TextField
                    id="P6"
                    onChange={handleChange}
                    label="Literasi Bahasa Indonesia (P6)"
                    placeholder="Contoh: 527"
                    size="small"
                    required
                />
                <TextField
                    id="P7"
                    onChange={handleChange}
                    label="Literasi Bahasa Inggris (P7)"
                    placeholder="Contoh: 527"
                    size="small"
                    required
                />
                <div className="mt-5 text-center w-full">
                    <Button onClick={handleSubmit} type="submit" className="w-full lg:w-1/" variant="contained" size="large" endIcon={<SendIcon />}>
                        Lihat Hasil
                    </Button>
                </div>
            </form>
        </div>
        {/* </form> */}
    </>);
}

export default Form;