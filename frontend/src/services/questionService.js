export const fetchFirstQuestion = async () => {
    const response = await fetch('http://localhost:5000/api/questions/start');
    if (!response.ok) throw new Error('Failed to fetch the first question');
    return response.json();
  };
  
  export const fetchNextQuestion = async (currentQuestionId, selectedOption) => {
    const response = await fetch('http://localhost:5000/api/questions/next', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentQuestionId, selectedOption })
    });
    if (!response.ok) throw new Error('Failed to fetch the next question');
    return response.json();
  };
  