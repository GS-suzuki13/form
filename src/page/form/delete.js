

export function deleteDataItem = (idItem) => {
    const filteredItens = data.filter(d => d.id !== idItem);
    setData(filteredItens);
  }
    const [count, setCount] = useState(0);

  const implementCount = () => {
    setCount(count + 1)
  }

