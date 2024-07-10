export function useResults() {
  /*const saveResults = (todaysScore) => {
    const statistics = {
      date: new Date().getTime(),
      score: todaysScore,
    };

    const previousStatistics =
      JSON.parse(localStorage.getItem("statistics")) || [];

    const combinedStatistics = [...previousStatistics, statistics];

    localStorage.setItem("statistics", JSON.stringify(combinedStatistics));
  };

  return { saveResults };
}*/

  const saveResults = (todaysScore) => {
    const statistics = {
      date: new Date().getTime(),
      score: todaysScore,
    };

    const previousStatistics =
      JSON.parse(localStorage.getItem("statistics")) || [];

    const combinedStatistics = [...previousStatistics, statistics];

    localStorage.setItem("statistics", JSON.stringify(combinedStatistics));
  };

  return { saveResults };
}
export default useResults;

//return { results: localStorage.setItem("statistics", JSON.stringify(combinedStatistics)), saveResults };
