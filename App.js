import { useEffect } from 'react';

export function Thought(props) {

  useEffect(() => {
    //Calculate when thought expires
    const timeRemaining = thought.expiresAt - Date.now();
    //Create timer
    const timeOut = setTimeout(()=> {
      removeThought(thought.id);
    }, timeRemaining);
    //Clean up
    return () => {
      clearTimeout(timeOut);
    };
  }, [thought]);

  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
