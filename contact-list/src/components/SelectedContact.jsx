import { useEffect, useState } from "react";

export default function SelectedContact({ selectedContactId }) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function selectedContactIds() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    selectedContactIds();
  }, []);
  return (
    <>
      {contact ? (
        <>
          <p>{contact.name}</p>
          <p>{contact.username}</p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <p>{contact.company.name}</p>
        </>
      ) : (
        <p>They Dead</p>
      )}
    </>
  );
}
