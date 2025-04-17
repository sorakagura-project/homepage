"use client"

import { motion } from 'framer-motion'

export function Amanoiwato() {
  return (
    <section className="py-24 bg-background/50">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-4 bg-gradient-to-br from-background/90 to-background/70 rounded-lg shadow-xl border border-primary/10">
            <div className="relative space-y-3 font-yujiboku text-lg leading-loose">
              <p>
                むかしむかし、世界にのう、スサノオちゅう、人の気持ちなんぞ露ほども気にかけん、<br></br>大地を削り、海を荒らす、困った神さまがおったそうな。
              </p>

              <p>
                その乱暴な振る舞いを見て、太陽の神アマテラスは、こわうなってしもうての、<br></br>岩戸の奥深くに身を隠してしもうた。
              </p>
              
              <p>
                するとどうじゃ、世界から光がすっかり失われて、<br></br>空も地も、真っ暗な闇に包まれてしもうたんじゃ。
              </p>

              <p>
                道を失い皆が困り果てる中で、八百万の神々が集うて、天の川原で知恵を寄せ合い、<br></br>矛を立て、鏡や玉飾りをこしらえ、そして、岩戸の前でひとりの女神が舞を踊り、<br></br>神々はその姿を大いに笑い、歓声をあげたんじゃ。
              </p>
              
              <p>
                するとアマテラスが、そっと岩戸の隙間から顔をのぞかせた。<br></br>そして、自らが映った鏡を見てる内に岩の陰から連れ出したんじゃと。
              </p>

              <p>
                そうして世界は、ふたたび光を取り戻したんじゃよ。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}