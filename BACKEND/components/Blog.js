import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import MarkdownEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import Spinner from './Spinner';

export default function Blog() {
    return (
        <>
            <form className='addWebsiteform'>
                {/* Blog Title */}
                <div className="w-100 flex flex-col flex-left mb-2">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" placeholder='Enter blog title' />
                </div>

                {/* Blog Slug URL */}
                <div className="w-100 flex flex-col flex-left mb-2">
                    <label htmlFor="slug">Slug (SEO Friendly URL)</label>
                    <input type="text" name="slug" id="slug" placeholder='Enter Slug URL' />
                </div>

                {/* Blog Category */}
                <div className="w-full flex flex-col flex-left mb-2">
                    <label htmlFor="category">
                        Choisissez une ou plusieurs catégories <span>(Maintenez Ctrl pour plusieurs)</span>
                    </label>
                    <select
                        name="category"
                        id="category"
                        multiple
                        className="p-2 border rounded w-full h-40"
                        defaultValue={[]}
                    >
                        <option value="web">Développement Web</option>
                        <option value="desktop">Applications Desktop</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="audit">Audit des Logiciels</option>
                        <option value="integration">Intégration</option>
                        <option value="consulting">Consulting</option>
                        <option value="formation">Formation</option>
                        <option value="support">Centre d'aide</option>
                        <option value="docs">Personnalisation des documents</option>
                    </select>
                </div>

                {/* Blog Images */}
                <div className="w-100 flex flex-col flex-left mb-2">
                    <div className="w-100">
                        <label htmlFor="fileInput">
                            Images (la première image sera utilisée comme miniature, vous pouvez les glisser-déposer)
                        </label>
                        <input type="file" name="images" id="fileInput" className='mt-1' accept='image/*' multiple />
                    </div>
                    <div className="w-100 flex flex-left mt-1">
                        <Spinner />
                    </div>
                </div>

                {/* Markdown Description */}
                <div className="description w-100 flex flex-col flex-left mb-2">
                    <label htmlFor="description">
                        Blog content (pour ajouter une image : téléversez-la, copiez le lien et utilisez `![alt text](link)`)
                    </label>
                    <MarkdownEditor
                        style={{ width: '100%', height: '500px' }}
                        renderHTML={(text) => (
                            <ReactMarkdown
                                components={{
                                    code: ({ node, inline, className, children, ...props }) => {
                                        const match = /language-(\w+)/.exec(className || '');
                                        if (inline) {
                                            return <code>{children}</code>
                                        } else if (match) {
                                            return (
                                                <div style={{ position: 'relative' }}>
                                                    <pre style={{ padding: '0', borderRadius: '5px', overflowX: 'auto', whiteSpace: 'pre-wrap' }} {...props}>
                                                        <code>{children}</code>
                                                    </pre>
                                                    <button
                                                        style={{ position: 'absolute', top: '0', right: '0', zIndex: '1' }}
                                                        onClick={() => navigator.clipboard.writeText(String(children))}
                                                    >
                                                        copy code
                                                    </button>
                                                </div>
                                            )
                                        } else {
                                            return <code {...props}>{children}</code>
                                        }
                                    }
                                }}
                            >
                                {text}
                            </ReactMarkdown>
                        )}
                    />
                </div>

                {/* Tags */}
                <div className="w-100 flex flex-col flex-left mb-2">
                    <label htmlFor="tags" className="mb-1 font-medium">
                        Tags <span className="text-sm text-gray-500">(Ctrl+clic pour en sélectionner plusieurs)</span>
                    </label>
                    <select
                        name="tags"
                        id="tags"
                        multiple
                        className="p-2 border border-gray-300 rounded-md h-32"
                    >
                        <option value="seo">Référencement</option>
                        <option value="marketing">Marketing</option>
                        <option value="developpement">Développement</option>
                        <option value="design">Design</option>
                        <option value="ecommerce">e-Commerce</option>
                        <option value="branding">Branding</option>
                        <option value="analyse">Analyse</option>
                    </select>
                </div>

                {/* blog status */}
                <div className="w-100 flex flex-col flex-left mb-2">
                    <label htmlFor="status">Status</label>
                    <select name="status" id="status" >
                        <option value="" disabled>No select</option>
                        <option value="draft">Brouillon</option>
                        <option value="publish">Publié</option>
                    </select>
                </div>

                <div className="w-100 mb-1">
                    <button type="submit" className="w-100 addwebbtn flex-center">
                        Publier
                    </button>
                </div>
            </form>
        </>
    );
}
