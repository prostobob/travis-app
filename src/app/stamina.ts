let getData = (data: number) => data + 1;

let filterData = (data: number) => data - 1;

let mapData = (data: number) => data + 2;

let showData = (data: number) => `result: ${data}`;

let makeResult = (data: number, operations) => {
  return operations.reduce((acc, item) => {
    return item(acc);
  }, data);
};

let fn = (...operations) => {
  return (data: number) => {
    return makeResult(data, operations);
  };
};

fn(5);

// let fn = compose(getData, filterData, mapData, showData);
