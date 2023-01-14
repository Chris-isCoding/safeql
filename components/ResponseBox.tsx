import { useRef, useEffect, useContext, useState } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, basicSetup } from 'codemirror';
import { keymap } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { oneDark } from '@codemirror/theme-one-dark';
import { graphql } from 'cm6-graphql';
import { Context } from '../src/context';
import { fixedHeightEditor } from '../src/cm6Theme';

export const ResponseBox = (props: any) => {
  const responseBox = useRef(null);
  const { response } = useContext(Context);

  useEffect(() => {
    const startState = EditorState.create({
      doc: response || '',
      extensions: [
        basicSetup,
        // @ts-ignore
        keymap.of([defaultKeymap, indentWithTab]),
        oneDark,
        graphql(),
        fixedHeightEditor,
      ],
    });

    const view = new EditorView({
      state: startState,
      // @ts-ignore
      parent: responseBox.current,
    });

    return () => {
      view.destroy();
    };
  }, [response]);

  return (
    <section className='mt-2 mx-1 rounded-t-lg-1 w-1/3 box-border min-w-1/3'>
      <div className='flex px-1 font-bold h-15 px-2 py-2 content-center'>
        <h1 className='flex text-xl p-2'>Response</h1>
      </div>
      <div
        ref={responseBox}
        className='response'
      ></div>
    </section>
  );
};
