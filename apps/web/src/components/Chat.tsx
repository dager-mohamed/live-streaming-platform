import { Button } from '@org/shared';
import { Textarea } from '@org/shared';
import { SendIcon } from 'lucide-react';

export default function Chat() {
    return(
        <div className="bg-background border-l flex flex-col w-[400px]">
        <div className="border-b px-4 py-3 text-lg font-medium">Live Chat</div>
        <div className="flex-1 overflow-auto p-4 space-y-4">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center text-sm font-medium">
              JD
            </div>
            <div>
              <div className="font-medium">John Doe</div>
              <div className="text-muted-foreground text-sm">
                Hey, this is looking great!
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-secondary text-secondary-foreground w-8 h-8 flex items-center justify-center text-sm font-medium">
              SA
            </div>
            <div>
              <div className="font-medium">Sarah Adams</div>
              <div className="text-muted-foreground text-sm">
                Wow, the video quality is amazing!
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-accent text-accent-foreground w-8 h-8 flex items-center justify-center text-sm font-medium">
              MJ
            </div>
            <div>
              <div className="font-medium">Michael Johnson</div>
              <div className="text-muted-foreground text-sm">
                Can not wait to see more of this!
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-muted text-muted-foreground w-8 h-8 flex items-center justify-center text-sm font-medium">
              EM
            </div>
            <div>
              <div className="font-medium">Emily Miller</div>
              <div className="text-muted-foreground text-sm">
                This is so cool, I am loving it!
              </div>
            </div>
          </div>
        </div>
        <div className="border-t p-4">
          <div className="relative">
            <Textarea
              placeholder="Type your message..."
              className="pr-12 rounded-md"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute top-1/2 right-2 -translate-y-1/2"
            >
              <SendIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    )
}