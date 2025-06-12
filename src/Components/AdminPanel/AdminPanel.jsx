import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './AdminPanel.css';

const defaultData = {
  "РОЗТЯЖКИ": [
    { id: 1, title: "Груди", price: "900-1500 грн", image: "Price1.jpg" },
    { id: 2, title: "Живіт", price: "900-2000 грн", image: "Price2.jpg" },
    { id: 3, title: "Бока", price: "900-1500 грн", image: "Price3.jpg" },
    { id: 4, title: "Стегна", price: "900-2000 грн", image: "Price4.jpg" },
    { id: 5, title: "Сідниці", price: "900-1500 грн", image: "Price5.jpg" },
    { id: 6, title: "Гомілки", price: "900-1000 грн", image: "Price6.jpg" }
  ],
  "ШРАМИ/РУБЦІ": [
    { id: 7, title: "Шрам до 5см", price: "700 грн" },
    { id: 8, title: "Шрам після кесаревого", price: "1000 грн" },
    { id: 9, title: "Шрам після мамопластики", price: "1000 грн" },
    { id: 10, title: "Шрам після абдомінопластики", price: "1300 грн" }
  ],
  "ГОЛОВА/ОБЛИЧЧЯ": [
    { id: 11, title: "Шкіра голови", price: "800 грн", image: "Price1.1.webp" },
    { id: 12, title: "Обличчя", price: "800 грн", image: "Price1.2.jpg" },
    { id: 13, title: "Шия+декольте", price: "900 грн", image: "Price1.3.jpg" }
  ],
  "ВІЇ": [
    { id: 14, title: "Ламінування + фарбування брів", price: "800 грн", image: "Price1.4.jpg" }
  ]
};

// 🔁 Завантаження локального зображення
const getImage = (fileName) => {
  try {
    return require(`../../assets/${fileName}`);
  } catch (err) {
    console.error("Image not found:", fileName);
    return null;
  }
};

const Price = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("priceListData");
    return saved ? JSON.parse(saved) : defaultData;
  });

  const [selectedCategory, setSelectedCategory] = useState("РОЗТЯЖКИ");

  useEffect(() => {
    localStorage.setItem("priceListData", JSON.stringify(data));
  }, [data]);

  const handleChange = (index, field, value) => {
    const updated = [...data[selectedCategory]];
    updated[index][field] = value;
    setData({ ...data, [selectedCategory]: updated });
  };

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange(index, "image", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddService = () => {
    const newService = { id: Date.now(), title: "", price: "", image: "" };
    setData({
      ...data,
      [selectedCategory]: [...data[selectedCategory], newService]
    });
  };

  const handleDelete = (index) => {
    const updated = [...data[selectedCategory]];
    updated.splice(index, 1);
    setData({ ...data, [selectedCategory]: updated });
  };

  const handleResetToDefault = () => {
  const confirmed = window.confirm("Скинути всі ціни та фото до стандартних?");
  if (confirmed) {
    const deepCopy = JSON.parse(JSON.stringify(defaultData)); // 🟢 Створює копію
    localStorage.setItem("priceListData", JSON.stringify(deepCopy));
    setData(deepCopy); // 🔄 оновлює стан
  }
};


  return (
    <div className="admin-panel">
      <h2>Адмін Панель - Редагування Цін</h2>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="category-select"
      >
        {Object.keys(data).map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div className="services-list">
        {data[selectedCategory].map((item, index) => (
          <div key={item.id} className="service-item">
            <input
              type="text"
              value={item.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
              placeholder="Назва послуги"
            />
            <input
              type="text"
              value={item.price}
              onChange={(e) => handleChange(index, "price", e.target.value)}
              placeholder="Ціна"
            />

            {selectedCategory !== "ШРАМИ/РУБЦІ" && (
              <>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(index, e)}
                />
                {item.image && (
                  <img
                    src={
                      item.image.startsWith("data:image")
                        ? item.image
                        : getImage(item.image)
                    }
                    alt="preview"
                    className="image-preview"
                  />
                )}
              </>
            )}

            <button onClick={() => handleDelete(index)} className="delete-btn">
              Видалити
            </button>
          </div>
        ))}

        <button onClick={handleAddService} className="add-btn">
          Додати послугу
        </button>

        <button
          onClick={() => {
            const confirmed = window.confirm("Ви дійсно хочете вийти з адмін панелі?");
            if (confirmed) navigate("/");
          }}
          className="close-btn"
        >
          Покинути адмін панель
        </button>

        <button onClick={handleResetToDefault} className="reset-btn">
          Скинути ціни до стандартних
        </button>
      </div>
    </div>
  );
};

export default Price;
