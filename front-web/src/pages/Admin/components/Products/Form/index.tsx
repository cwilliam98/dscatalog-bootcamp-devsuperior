import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
  name: string;
  price: string;
  category: string;
  description: string;
};

type FormEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

const Form = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    price: '',
    category: '',
    description: '',
  });

  const handleOnChange = (event: FormEvent) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log({ name, value });
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      ...formData,
      imgUrl:
        'https://www.casasbahia-imagens.com.br/Games/Playstation4/ConsolesPlaystation4/12445840/1272262151/console-playstation-4-slim-1tb-1tera-bytes-novo-modelo-ps4-sony-12445840.jpg',
      categories: [{ id: formData.category }],
    };

    makeRequest({ url: '/products', method: 'POST', data: payload });
  };

  return (
    <form onSubmit={handleSubmit}>
      <BaseForm title="cadastrar um produto">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              value={formData.name}
              name="name"
              className="form-control mb-5"
              onChange={handleOnChange}
              placeholder="Nome do produto"
            />
            <select
              value={formData.category}
              className="form-control mb-5"
              name="category"
              onChange={handleOnChange}
            >
              <option value="2">eletronicos</option>
              <option value="1">livros</option>
              <option value="3">computadores</option>
            </select>
            <input
              type="text"
              name="price"
              value={formData.price}
              className="form-control"
              onChange={handleOnChange}
              placeholder="Preço"
            />
          </div>
          <div className="col-6">
            <textarea
              name="description"
              value={formData.description}
              className="form-control"
              onChange={handleOnChange}
              cols={30}
              rows={10}
              placeholder="Descrição"
            />
          </div>
        </div>
      </BaseForm>
    </form>
  );
};

export default Form;
