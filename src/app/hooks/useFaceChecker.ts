import ApplicationConstants from "../constants/ApplicationConstants"

const validateClassroom = (base64: string) => {
  const body = JSON.stringify({
    image: base64,
    classes: 1
  })


  return fetch(ApplicationConstants.NEXT_PUBLIC_API_URL, {
    method: "POST",
    body
  });
}

export default validateClassroom;