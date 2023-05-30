/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import * as React from "react";
import { fetch } from "@yext/pages/util";
import "../index.css";
import {
  Template,
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TransformProps,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Favicon from "../assets/images/yext-favicon.ico";
import PageLayout from "../components/PageLayout";
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';

export const config: TemplateConfig = {
  name: "index",
};


export const transformProps: TransformProps<TemplateRenderProps> = async (
  data
) => {
  return data
};

export const getPath: GetPath<TemplateRenderProps> = () => {
  return `index.html`;
};


// export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
//   relativePrefixToRoot,
//   path,
//   document,
// }): HeadConfig => {
//   return {
//     title: "Static Page Example",
//     charset: "UTF-8",
//     viewport: "width=device-width, initial-scale=1",
//     tags: [
//       {
//         type: "meta",
//         attributes: {
//           name: "description",
//           content: "Static page example meta description.",
//         },
//       }
//     ],
//   };
// };


const Index: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const { _site } = document;

  const [count, setCount] = React.useState(0);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  return (
    <>
        <PageLayout>
            <div className="centered-container">
                <div className="section space-y-5">
                    <h1>Home Page</h1>
                    <div className="flex space-x-5 items-center">
                        <Button variant="outlined" color="error">Hello World</Button>
                        <div className="space-x-2">
                            <button className="font-semibold" onClick={() => setCount(c => c + 1)}>Current count:</button>
                            <span>{count}</span>
                        </div>
                    </div>
                    <Checkbox {...label} defaultChecked />
                </div>
            </div>
        </PageLayout>
    </>
  );
};

export default Index;