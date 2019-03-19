import React, { Fragment, useState } from "react";

export const Main = () => {
  // cardData -> state variable setCardData -> method to update
  const [cardData, setCardData] = useState([
    {
      // initial state
      linkName: "link",
      linkHref: "https://github.com"
    }
  ]);

  const [newCard, setNewCard] = useState({
    linkName: "",
    linkHref: ""
  });

  const linkImageStyle = {
    backgroundImage:
      "url('https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg')"
  };

  return (
    <Fragment>
      <nav className="navigation">
        <a hr>
          <img
            height="40px"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React Icon"
          />
        </a>
        <ul>
          <li>Home</li>
        </ul>
      </nav>

      <main>
        <div className="leftContent">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React Icon"
          />

          <form action="" onSubmit={(e) => e.preventDefault()}>
            <h2 className="formTitle">Add a bookmark</h2>
            <div>
              <label for="linkTitle" className="formLabel">
                Enter a bookmark name{" "}
              </label>

              <input
                value={newCard.linkName}
                onChange={(e) =>
                  setNewCard({
                    ...newCard,
                    linkHref: e.currentTarget.value
                  })
                }
                type="text"
                name="linkTitle"
                minLength="1"
                maxLength="25"
                placeholder="25 characters max"
              />
            </div>
            <div />

            <div>
              <label for="linkHref" className="formLabel">
                Enter a bookmark name{" "}
              </label>

              <input
                value={newCard.linkHref}
                onChange={(e) =>
                  setNewCard({
                    ...newCard,
                    linkHref: e.currentTarget.value
                  })
                }
                type="text"
                name="linkHref"
                minLength="7"
                placeholder="https://example.com"
              />
            </div>

            <button>Add</button>
          </form>
        </div>

        <div className="rightContent">
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle} />
            <div className="linkCardLink">
              <h2>
                <a href="#">Link</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle} />
            <div className="linkCardLink">
              <h2>
                <a href="#">Link</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle} />
            <div className="linkCardLink">
              <h2>
                <a href="#">Link</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle} />
            <div className="linkCardLink">
              <h2>
                <a href="#">Link</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle} />
            <div className="linkCardLink">
              <h2>
                <a href="#">Link</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle} />
            <div className="linkCardLink">
              <h2>
                <a href="#">Link</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle} />
            <div className="linkCardLink">
              <h2>
                <a href="#">Link</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle} />
            <div className="linkCardLink">
              <h2>
                <a href="#">Link</a>
              </h2>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
