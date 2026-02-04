import { Send, Mic, X } from "lucide-react";
import { useState } from "react";

interface ChatbotModalProps {
    onClose: () => void;
}

export const ChatbotModal = ({ onClose }: ChatbotModalProps) => {
    const [message, setMessage] = useState("");

    return (
        <div className="absolute bottom-24 right-0 w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 animate-in fade-in slide-in-from-bottom-5 duration-300 z-50">
            {/* Header */}
            <div className="bg-blue-950 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 p-1 overflow-hidden">
                        <img
                            src="/chatbot-avatar.png"
                            alt="AI Assistant"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-sm">Builders Assistant</h3>
                        <p className="text-blue-200 text-xs flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-green-400"></span>
                            Online
                        </p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="text-white/70 hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Chat Area */}
            <div className="h-[400px] bg-zinc-50 p-4 overflow-y-auto">
                <div className="flex gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 overflow-hidden shrink-0">
                        <img
                            src="/chatbot-avatar.png"
                            alt="Bot"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-zinc-700 max-w-[80%] border border-zinc-100">
                        Hello! 👋 I'm here to help you finding the best construction materials. How can I assist you today?
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-zinc-100">
                <div className="relative flex items-center gap-2">
                    <button className="p-2 text-zinc-400 hover:text-blue-600 transition-colors rounded-full hover:bg-blue-50">
                        <Mic className="w-5 h-5" />
                    </button>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 bg-zinc-100 text-sm px-4 py-2.5 rounded-full outline-none focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-zinc-400 text-zinc-700"
                    />
                    <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
                        <Send className="w-4 h-4 ml-0.5" />
                    </button>
                </div>
                <p className="text-[10px] text-center text-zinc-400 mt-2">
                    Powered by Builders Bazaar AI
                </p>
            </div>
        </div>
    );
};
