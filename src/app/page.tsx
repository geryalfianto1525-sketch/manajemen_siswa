
function hitungPoin(kehadiran: number) {
    return kehadiran * 10.0;
}

function InfoSiswa() {
    return (
        <div style={{ color: "#000000", border:"6px solid red", padding:"30px", marginTop:"30px", borderRadius:"20px", maxWidth:"300px"}}>
            <h3>Nama Siswa: Roni</h3>
            <p>Status: Aktif</p>
        </div>
    );
}

export default function HomePage() {
    const totalPoin = hitungPoin(5);

    return (
        <div style={{padding:"20px", fontFamily:"sans-serif"}}>
            <h1>Welcome to the Home Page</h1>
            <h2>Total Poin Kehadiran: {totalPoin}</h2>
            <InfoSiswa />
        </div>
    );
}