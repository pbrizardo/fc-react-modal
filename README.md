# How to use

```javascript
const MyComponent = () => {

  const [ openModal, setOpenModal ] = React.useState(false);
  
  return (
    <section>
      <h1>Modal example</h1>
      
      <button onClick={() => setOpenModal(true)}>Open</button>
      
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <ModalClose onClose={() => setOpenModal(false)} />
        <div>
          Some Content
        </div>
      </Modal>
      
    </section>
  );
};
```
