// Main page
export default function MainPage() {
  return (
    <main className="main">
      <h2 className="title">Find your average 🧮</h2>
      <Form />
      <Description />
      <Contrul />
    </main>
  );
}

// 2) Form part
function Form() {
  return (
    <form className="input-form">
      <div className="input-subject">
        <label for="subject">Subject</label>
        <br />
        <input type="text" id="subject" placeholder="Farhad..." />
      </div>

      <div className="input-Mark">
        <label for="mark">Mark</label>
        <br />
        <input type="number" id="mark" placeholder="78" />
      </div>

      <div className="input-cridete">
        <label className="crited">cridete</label>
        <br />
        <select>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
        </select>
      </div>

      <button>
        <span>➕</span>add
      </button>
    </form>
  );
}

// 3) description
function Description() {
  return (
    <div className="descriptin">
      <DescriptionData />
      <DescriptionData />
      <DescriptionData />
    </div>
  );
}

function DescriptionData() {
  return (
    <div className="conatiner">
      <div className="icons">
        <div>
          <span>❌</span>
          <span> 📝</span>
        </div>
        <strong>Math</strong>
      </div>
      <div className="range">
        <div className="value">74</div>
      </div>
      <div className="cridete">
        * <span>4</span> <span>😎</span>
      </div>
    </div>
  );
}

// 4)Contrule

function Contrul() {
  return (
    <div className="controle">
      <button>= calculete</button>
      <select>
        <option value={"mark"}>Sort by mark</option>
        <option value={"name"}>Sort by name</option>
        <option value={"cirite"}>Sort by name</option>
      </select>
      <button>Clear all</button>
    </div>
  );
}
