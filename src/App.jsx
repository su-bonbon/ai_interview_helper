export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Civics Interview Prep</p>
        <h1>시민권 인터뷰 도우미</h1>
        <p className="subtitle">
          인터뷰 흐름에 맞춘 연습, 질문-답변 기록, 그리고 복습까지 한 곳에서.
        </p>
        <div className="actions">
          <button className="primary">모의 인터뷰 시작</button>
          <button className="secondary">질문 목록 보기</button>
        </div>
      </header>

      <section className="grid">
        <article>
          <h2>오늘의 연습</h2>
          <p>약점 질문을 모아 10분만 집중 훈련하세요.</p>
        </article>
        <article>
          <h2>진행 기록</h2>
          <p>최근 답변을 타임라인으로 확인하고 개선 포인트를 메모합니다.</p>
        </article>
        <article>
          <h2>리마인더</h2>
          <p>인터뷰 일정과 필요한 서류 체크리스트를 관리합니다.</p>
        </article>
      </section>
    </main>
  );
}
