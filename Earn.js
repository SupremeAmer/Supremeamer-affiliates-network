import React, { useState, useEffect } from "react";

// Dummy example task
const exampleTask = {
  id: "task1",
  image:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&q=80",
  description: "Share our SupremeAmer promo post on Twitter with #SupremeAmer!",
  reward: 50,
  link: "https://twitter.com/supremeamerpromo",
};

function getTaskState() {
  // LocalStorage: { completed: bool, clickCount: 0|1|2 }
  const data = localStorage.getItem("supremeamer_task1");
  return data ? JSON.parse(data) : { completed: false, clickCount: 0 };
}
function setTaskState(state) {
  localStorage.setItem("supremeamer_task1", JSON.stringify(state));
}

function Earn() {
  const [taskState, setTaskStateReact] = useState(getTaskState());
  const [showEarn, setShowEarn] = useState(true);
  const [rewardGiven, setRewardGiven] = useState(false);

  useEffect(() => {
    setTaskState(taskState);
    setTaskStateReact(getTaskState());
  }, [taskState.completed, taskState.clickCount]);

  // Reset clickCount if user closes earn before completing
  useEffect(() => {
    if (!showEarn && !taskState.completed) {
      setTaskState({ completed: false, clickCount: 0 });
      setTaskStateReact(getTaskState());
    }
  }, [showEarn, taskState.completed]);

  const handleCompleteClick = () => {
    if (taskState.completed) return;
    const count = taskState.clickCount + 1;

    // On second click, reward user and mark as completed
    if (count === 2) {
      // Add reward to user balance in localStorage
      const user = JSON.parse(localStorage.getItem("supremeamer_user"));
      if (user && !taskState.completed && !rewardGiven) {
        user.balance = Number(user.balance) + exampleTask.reward;
        localStorage.setItem("supremeamer_user", JSON.stringify(user));
        setRewardGiven(true);
      }
      setTaskState({ completed: true, clickCount: 2 });
      setTaskStateReact({ completed: true, clickCount: 2 });
    } else {
      // First click: redirect and set clickCount=1
      setTaskState({ ...taskState, clickCount: 1 });
      setTaskStateReact({ ...taskState, clickCount: 1 });
      window.open(exampleTask.link, "_blank");
    }
  };

  // If completed, keep button disabled and reward hidden even on refresh
  return showEarn ? (
    <div className="earn-container">
      <div className="task-card">
        <img className="task-img" src={exampleTask.image} alt="Task" />
        <div className="task-info">
          <p className="task-desc">{exampleTask.description}</p>
          {!taskState.completed && (
            <div className="task-reward">
              Reward: <strong>{exampleTask.reward}$SAC</strong>
            </div>
          )}
          <button
            className={
              taskState.completed
                ? "btn-complete done"
                : taskState.clickCount === 1
                ? "btn-complete try-again"
                : "btn-complete"
            }
            disabled={taskState.completed}
            onClick={handleCompleteClick}
          >
            {taskState.completed
              ? "Completed"
              : taskState.clickCount === 1
              ? "TRY AGAIN"
              : "Complete"}
          </button>
        </div>
      </div>
      <button className="close-btn" onClick={() => setShowEarn(false)}>
        ×
      </button>
    </div>
  ) : (
    <div className="earn-closed">
      <button className="reopen-btn" onClick={() => setShowEarn(true)}>
        View Task Again
      </button>
    </div>
  );
}

export default Earn;
