const GolfHero = () => {
  return (
    <section className="hero">
      <h1>จองสนามกอล์ฟออนไลน์ง่าย ๆ</h1>
      <p>เลือกสนามโปรดของคุณ แล้วจองเวลาออกรอบได้ทันที</p>
      <button onClick={() => alert("ไปหน้าจองสนามเร็ว ๆ นี้!")}>
        เริ่มจองเลย
      </button>
    </section>
  );
};

export default GolfHero;
