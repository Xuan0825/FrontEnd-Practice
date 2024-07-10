const jobIDURL = "https://hacker-news.firebaseio.com/v0/jobstories.json";
const jobSingleDataUrl = "https://hacker-news.firebaseio.com/v0/item/{id}.json";

export async function fetchjobID() {
  try {
    const response = await fetch(jobIDURL);
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error("Something Wrong");
    }
  } catch (err) {
    console.log(err);
  }
}

export async function fetchDatawithId(id: number) {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function fetchSixData(array: number[]) {
  try {
    const fetchAllPromise = array.map(async (id) => {
      try {
        const response = await fetchDatawithId(id);
        return response;
      } catch (err) {
        console.log(err);
      }
    });
    const res = await Promise.all(fetchAllPromise);
    return res;
  } catch (err) {
    console.log(err);
  }
}
