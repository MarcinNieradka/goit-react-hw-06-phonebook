import React from 'react';
import clsx from 'clsx';
import './ContactForm.css';

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    onSubmit(name, number);
    e.target.reset();
  };

  return (
    <form className={clsx('main-form')} onSubmit={handleSubmit}>
      <label htmlFor="name" className={clsx('main-form__label')}>
        Name
        <input type="text" id="name" name="name" />
      </label>
      <label htmlFor="number" className={clsx('main-form__label')}>
        Phone number
        <input type="tel" id="number" name="number" title="Phone nr" required />
      </label>
      <button className={clsx('main-form__button')} type="submit">
        Add contact
      </button>
    </form>
  );
};
