export default async function handler(req, res) {
  if (req.method === "POST") {
    const { contactInfo } = req.body;

    // Проверь, что контактная информация не пустая
    if (!contactInfo) {
      return res
        .status(400)
        .json({ success: false, message: "Contact info is required" });
    }

    // Здесь можно сохранить данные в базу данных
    // Пример простого логирования в консоль
    console.log("New lesson booked:", contactInfo);

    // Ответ на запрос
    res
      .status(200)
      .json({ success: true, message: "Lesson booked successfully" });
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
