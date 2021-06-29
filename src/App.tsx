import * as React from 'react';
import { TextField } from '@material-ui/core';
import './App.css';

type Base = {
  readonly base: number;
  readonly regex: {prefix: RegExp, base: RegExp};
}

const bases: Base[] = [
  {base: 1, regex: {prefix: /^(?:un(.*))|(?:hen(.*)sna)/, base: /^unary$/}},
  {base: 2, regex: {prefix: /^bi(.*)/, base: /(.*)binary$/}},
  {base: 3, regex: {prefix: /^tri(.*)/, base: /(.*)trinary$/}},
  {base: 4, regex: {prefix: /^tetra(.*)/, base: /(.*)quaternary$/}},
  {base: 5, regex: {prefix: /^penta(.*)/, base: /(.*)quinary$/}},
  {base: 6, regex: {prefix: /^hexa(.*)/, base: /(.*)seximal$/}},
  {base: 7, regex: {prefix: /^hepta(.*)/, base: /(.*)septimal$/}},
  {base: 8, regex: {prefix: /^octo(.*)/, base: /(.*)octal$/}},
  {base: 9, regex: {prefix: /^enna(.*)/, base: /(.*)nonary$/}},
  {base: 10, regex: {prefix: /^deca(.*)/, base: /(.*)[dg]e[cs]imal$/}},
  {base: 11, regex: {prefix: /^leva(.*)/, base: /(.*)elevenary$/}},
  {base: 12, regex: {prefix: /^doza(.*)/, base: /(.*[^s ])dozenal$/}},
  {base: 13, regex: {prefix: /^baker(.*)/, base: /(.*)(?:ba)?ker'?s ?dozenal$/}},
  {base: 16, regex: {prefix: /^tesser(.*)/, base: /(.*)hex$/}},
  {base: 17, regex: {prefix: /^mal(.*)/, base: /(.*)suboptimal$/}},
  {base: 20, regex: {prefix: /^icosi(.*)/, base: /(.*)vigesimal$/}},
  {base: 36, regex: {prefix: /^feta(.*)/, base: /(.*)niftimal$/}},
  {base: 100, regex: {prefix: /^hecto(.*)/, base: /(.*)centesimal$/}},
];

// Get the base portion of the name of the base. Contrast with the prefix.
// Names are confusing.
const getBaseNumber = (input: string): [string, number | null] => {
  for (const currentBase of bases) {
    let match = input.match(currentBase.regex.base);
    if (match) {
      console.log(`(getBaseNumber) Match is ${JSON.stringify(match)} for current base ${currentBase.base}, matching against ${currentBase.regex.base}`);
      return [match[1], currentBase.base];
    }
  }
  console.log("(getBaseNumber) No match");
  return [input, null];
}

const getPrefixNumber = (input: string): [string, number | null] => {
  for (const currentBase of bases) {
    let match = input.match(currentBase.regex.prefix);
    if (match) {
      console.log(`(getPrefixNumber) Match is ${JSON.stringify(match)} for current base ${currentBase.base}, matching against ${currentBase.regex.prefix}`);
      return [match[1], currentBase.base];
    }
  }
  console.log("(getPrefixNumber) No match");
  return [input, null];
}

const nameToNumber = (input: string): string => {
  // Edge case.
  if (input.length === 0) {return "";}

  let [remaining, output] = getBaseNumber(input);
  if (output) console.log(`(nameToNumber) Got base: remaining is now ${remaining} and output is ${output}`);
  let curPrefix: number | null;
  while (([remaining, curPrefix] = getPrefixNumber(remaining)) && curPrefix) {
    if (!output) {
      output = curPrefix;
    } else if (curPrefix === 1) {
      output += curPrefix;
    } else {
      output *= curPrefix;
    }
    console.log(`Output is now ${output}`);
  }
  return output?.toString() ?? "Sorry, but that doesn't look like a Misalian base name.";
}

const App = () => {
  // Using SSOT model.
  const [input, setInput] = React.useState("");
  const [representation, setRepresentation] = React.useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

 React.useEffect(() => {
   setRepresentation(nameToNumber(input));
 }, [input]);

  return (
    <div className="App">
      <form className="name" noValidate autoComplete="off">
        <TextField id="base-input" label="Input" variant="filled" value={input} onChange={onChangeInput} />
      </form>
      <text>{representation}</text>
    </div>
  );
}

export default App;
