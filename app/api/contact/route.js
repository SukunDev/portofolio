export async function POST(request) {
  try {
    const data = await request.json();
    const res = await fetch(process.env.NEXT_PUBLIC_APP_SUBMIT_FORM, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.status !== 200) {
      return Response.json({ status: false, message: "something wen't wrong" });
    }
    return Response.json({ status: true, message: "email has been sent" });
  } catch (error) {
    return Response.json({ status: false, message: "something wen't wrong" });
  }
}
