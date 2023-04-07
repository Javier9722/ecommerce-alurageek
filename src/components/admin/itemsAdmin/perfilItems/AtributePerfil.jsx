import React from "react";

export const AtributePerfil = ({ value }) => {
  return (
    <tr>
      <td className="align-top text-right font-bold">{value.key}</td>
      <td className="align-top ">:&nbsp;&nbsp;</td>
      <td>{value.info}</td>
    </tr>
  );
};
