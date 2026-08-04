export default async function handler(req, res) {
  try {

    if (req.method !== "POST") {
      return res.status(405).json({
        error: "Método no permitido"
      });
    }

    const body = typeof req.body === "string"
      ? JSON.parse(req.body)
      : req.body;

    const codigo = body?.codigo;

    if (!codigo) {
      return res.status(400).json({
        error: "Falta código"
      });
    }


    const respuesta = await fetch(
      "https://api.gumroad.com/v2/licenses/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          product_id: "_R8g_E9Zue7FcaFGcklNXQ==",
          license_key: codigo
        })
      }
    );


    const data = await respuesta.json();

    console.log("Respuesta Gumroad:", data);


    if (data.success) {
      return res.status(200).json({
        ok: true
      });
    }


    return res.status(401).json({
      ok: false
    });


  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Error interno"
    });

  }
}