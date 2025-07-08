import React, { useState } from 'react'
import { useEditor, EditorContent, FloatingMenu, BubbleMenu, } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import './Editor.css'
import color from '../colors'
import Underline from '@tiptap/extension-underline'
import { AlignCenter, AlignLeft, AlignRight, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Link2, List, ListOrdered, Redo, Undo, X } from 'lucide-react'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'



const Editor = () => {
    const [IsLinkBoxShown, setIsLinkBoxShown] = useState(false);
    const [LinkData, setLinkData] = useState({
        href: "",
        text: "",
        title: "",
        target: ""
    })


    const extensions = [StarterKit.configure({
        heading: {
            levels: [1, 2, 3, 4, 5, 6]
        }
    }), Underline,
    TextAlign.configure({
        types: ['heading', 'paragraph']
    }),
    Link.configure({
        openOnClick: true,
    })
    ]
    const content = '<p> write description here...</p>'

    const editor = useEditor({
        extensions,
        content,

    })

    if (!editor) return null
    return (
        <div>
            <div className=' flex items-center gap-1'>
                <button className={`w-8 h-8 cursor-pointer hover:bg-gray-200 font-bold rounded flex justify-center items-center  `} onClick={() => editor.chain().focus().undo().run()}>
                    <Undo size={20} />
                </button>
                <button className={`w-8 h-8 cursor-pointer hover:bg-gray-200 font-bold rounded flex justify-center items-center `} onClick={() => editor.chain().focus().redo().run()}>
                    <Redo size={20} />
                </button>
                <button className={`w-8 h-8 cursor-pointer  font-bold rounded ${editor.isActive('bold') ? "bg-gray-300" : "hover:bg-gray-200"} `} onClick={() => editor.chain().focus().toggleBold().run()}>
                    B
                </button><button className={`w-8 h-8 cursor-pointer  font-bold rounded italic ${editor.isActive('italic') ? "bg-gray-300" : "hover:bg-gray-200"} `} onClick={() => editor.chain().focus().toggleItalic().run()}>
                    I
                </button><button className={`w-8 h-8 cursor-pointer  font-bold rounded underline ${editor.isActive('underline') ? "bg-gray-300" : "hover:bg-gray-200"} `} onClick={() => editor.chain().focus().toggleUnderline().run()}>
                    U
                </button><button className={`w-8 h-8 cursor-pointer  font-bold rounded line-through ${editor.isActive('strike') ? "bg-gray-300" : "hover:bg-gray-200"} `} onClick={() => editor.chain().focus().toggleStrike().run()}>
                    S
                </button><button className={`w-8 h-8 cursor-pointer  font-bold rounded flex justify-center items-center ${editor.isActive({ textAlign: "left" }) ? "bg-gray-300" : "hover:bg-gray-200"} `} onClick={() => editor.chain().focus().setTextAlign("left").run()}>
                    <AlignLeft size={20} />
                </button><button className={`w-8 h-8 cursor-pointer  font-bold rounded flex justify-center items-center ${editor.isActive({ textAlign: "center" }) ? "bg-gray-300" : "hover:bg-gray-200"} `} onClick={() => editor.chain().focus().setTextAlign("center").run()}>
                    <AlignCenter size={20} />
                </button><button className={`w-8 h-8 cursor-pointer  font-bold rounded flex justify-center items-center ${editor.isActive({ textAlign: "right" }) ? "bg-gray-300" : "hover:bg-gray-200"} `} onClick={() => editor.chain().focus().setTextAlign('right').run()}>
                    <AlignRight size={20} />
                </button><button className={`w-8 h-8 cursor-pointer flex justify-center items-center  font-bold rounded ${editor.isActive('bulletList') ? "bg-gray-300" : "hover:bg-gray-200"} `} onClick={() => editor.chain().focus().toggleBulletList().run()}>
                    <List size={20} />
                </button><button className={`w-8 h-8 cursor-pointer  flex justify-center items-center font-bold rounded ${editor.isActive('orderedList') ? "bg-gray-300" : "hover:bg-gray-200"} `} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                    <ListOrdered size={20} />
                </button><button className={`w-8 h-8 cursor-pointer  flex justify-center items-center font-bold rounded ${editor.isActive('heading', { level: 1 }) ? "bg-gray-300" : "hover:bg-gray-200"} `} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
                    <Heading1 size={20} />
                </button><button className={`w-8 h-8 cursor-pointer  flex justify-center items-center font-bold rounded ${editor.isActive('heading', { level: 2 }) ? "bg-gray-300" : "hover:bg-gray-200"} `} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
                    <Heading2 size={20} />
                </button><button className={`w-8 h-8 cursor-pointer  flex justify-center items-center font-bold rounded ${editor.isActive('heading', { level: 3 }) ? "bg-gray-300" : "hover:bg-gray-200"} `} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
                    <Heading3 size={20} />
                </button><button className={`w-8 h-8 cursor-pointer  flex justify-center items-center font-bold rounded ${editor.isActive('heading', { level: 4 }) ? "bg-gray-300" : "hover:bg-gray-200"} `} onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}>
                    <Heading4 size={20} />
                </button><button className={`w-8 h-8 cursor-pointer  flex justify-center items-center font-bold rounded ${editor.isActive('heading', { level: 5 }) ? "bg-gray-300" : "hover:bg-gray-200"} `} onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}>
                    <Heading5 size={20} />
                </button><button className={`w-8 h-8 cursor-pointer  flex justify-center items-center font-bold rounded ${editor.isActive('heading', { level: 6 }) ? "bg-gray-300" : "hover:bg-gray-200"} `} onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}>
                    <Heading6 size={20} />
                </button><button className={`w-8 h-8 cursor-pointer  flex justify-center items-center font-bold rounded ${editor.isActive('link') ? "bg-gray-300" : "hover:bg-gray-200"} `} onClick={() => {
                    const selection = editor.state.selection
                    const text = editor.state.doc.textBetween(selection.from, selection.to, ' ')
                    setLinkData({
                        href: '',
                        text: text || '',
                        title: '',
                        target: '',
                    })
                    setIsLinkBoxShown(true)
                }}>
                    <Link2 size={20} />
                </button>
            </div>

            <EditorContent editor={editor} className='tiptap' />
            <FloatingMenu editor={editor} ></FloatingMenu>

            {IsLinkBoxShown && <div>
                <div className='h-screen w-screen bg-black/10 absolute top-0 left-0 z-20' > </div>
                <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] min-w-[200px] w-full  max-w-[400px] p-4  border border-gray-300 rounded z-20 ' style={{ backgroundColor: color.bg1 }}>
                    <div className='flex justify-between' ><span className='text-gray-800 text-xl' >Insert Link</span><button className='text-gray-700 cursor-pointer' onClick={() => setIsLinkBoxShown(!IsLinkBoxShown)} ><X /></button></div>

                    <div className='mt-10'>
                        <div className='text-gray-600' > URL</div>
                        <input type="text" style={{ backgroundColor: color.bg1 }} value={LinkData.href} onChange={(e) => setLinkData({ ...LinkData, href: e.target.value })} className=' border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all mt-1' placeholder='Enter URL' />
                    </div>
                    <div className='mt-3'>
                        <div className='text-gray-600' > Text to display</div>
                        <input type="text" style={{ backgroundColor: color.bg1 }} value={LinkData.text} onChange={(e) => setLinkData({ ...LinkData, text: e.target.value })} className=' border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all mt-1' placeholder='Enter Text' />
                    </div>
                    <div className='mt-3'>
                        <div className='text-gray-600' > Title</div>
                        <input type="text" style={{ backgroundColor: color.bg1 }} value={LinkData.title} onChange={(e) => setLinkData({ ...LinkData, title: e.target.value })} className=' border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all mt-1' placeholder='Enter Title' />
                    </div>
                    <div className='mt-3'>
                        <div className='text-gray-600' > Open in </div>
                        <select type="text" style={{ backgroundColor: color.bg1 }} value={LinkData.href} onChange={(e) => setLinkData({ ...LinkData, target: e.target.value })} className=' border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all mt-1'>
                            <option value="New Window" className='rounded-xl' >New Window</option>
                            <option value="New Window" className='rounded-xl' >Current Window</option>
                        </select>
                    </div>

                    <div className='mt-5'>
                        <div className='flex justify-end gap-1'>
                            <button onClick={() => setIsLinkBoxShown(false)} className=' mt-6 rounded w-20 text-[15px] py-2 px-3 cursor-pointer bg-gray-200 border-gray-300 border  hover:bg-gray-400 transition-all duration-100'>Cancal</button>
                            <button onClick={() => {
                                if (LinkData.href) {
                                    let url = LinkData.href.trim()

                                    // ✅ Auto-add https:// if missing
                                    if (!/^https?:\/\//i.test(url)) {
                                        url = 'https://' + url
                                    }
                                    editor.chain().focus().extendMarkRange("link")
                                        .setLink({
                                            href: url,
                                            title: LinkData.title,
                                            target: LinkData.target
                                        })
                                        .insertContent(LinkData.text).run()
                                }
                                setIsLinkBoxShown(false)
                            }} className=' mt-6 rounded w-20 text-white py-2 px-4 font-bold  cursor-pointer bg-blue-500 hover:bg-blue-700 transition-all duration-100'>Save</button>
                        </div>
                    </div>

                </div>
            </div>}

        </div>
    )
}

export default Editor